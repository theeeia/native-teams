import { Article, Category } from "@/types/types";
import { API_KEY, API_URL } from "@/utils/constants";
import { titleToSlug } from "@/utils/utils";

import { create } from "zustand";

interface ArticleState {
  articles: Record<Category, Article[]>;
  category: Category;
  searchQuery: string;
  currentPage: number;
  loading: boolean;
  fetchError: string;
  setArticles: (articles: Record<Category, Article[]>) => void;
  setCategory: (category: Category) => void;
  setCurrentPage: (page: number) => void;
  setQuery: (query: string) => void;
  fetchArticles: (category: Category) => void;
  getFilteredArticles: () => Article[];
  getPaginatedArticles: () => Article[];
  getTotalPages: () => number;
  fetchArticleByTitle: (
    category: Category,
    slug: string
  ) => Promise<Article | null>;
}

/**
 * Zustand store for managing articles and related UI state.
 *
 * State:
 * - articles: A record mapping categories to arrays of articles.
 * - category: The currently selected article category.
 * - searchQuery: Current text query for filtering articles.
 * - currentPage: Current page number for pagination.
 * - loading: Indicates if articles are being fetched.
 * - fetchError: Stores any error message from fetching articles.
 *
 * Actions:
 * - setArticles: Replace the entire articles record.
 * - setCategory: Set the active category and reset page/query.
 * - setQuery: Set the search query and reset page.
 * - setCurrentPage: Set the current pagination page.
 * - fetchArticles: Fetch articles from the API for a given category, cached if already fetched.
 * - getFilteredArticles: Return articles filtered by search query for the current category.
 * - getPaginatedArticles: Return a page of filtered articles (9 per page).
 * - getTotalPages: Calculate total pages based on filtered articles.
 * - fetchArticleByTitle: Fetch a single article by category and slug, fetches category if needed.
 */
export const useArticleStore = create<ArticleState>((set, get) => ({
  articles: {} as Record<Category, Article[]>,
  category: "general",
  searchQuery: "",
  currentPage: 1,
  loading: false,
  fetchError: "",
  setArticles: (articles) => set({ articles }),
  setCategory: (category) => set({ category, currentPage: 1, searchQuery: "" }),
  setQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),
  getFilteredArticles: () => {
    const { articles, category, searchQuery } = get();
    const articleCategory = articles[category] || [];
    return articleCategory.filter((article) => {
      const matched = searchQuery
        ? article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (article.description &&
            article.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
        : true;
      return matched;
    });
  },

  fetchArticles: async (category) => {
    const { articles } = get();

    if (articles[category]) {
      return;
    }

    set({ loading: true, fetchError: "" });

    try {
      const params = new URLSearchParams({
        apiKey: API_KEY,
        pageSize: "50",
        page: "1",
        category,
      });

      const response = await fetch(`${API_URL}${params.toString()}`);

      const data = await response.json();

      if (data.status === "ok") {
        set((prev) => ({
          articles: {
            ...prev.articles,
            [category]: data.articles,
          },
          loading: false,
        }));
      } else {
        set({ loading: false, fetchError: data.message });
      }
    } catch {
      set({ loading: false, fetchError: "Unknown Error" });
    }
  },
  getPaginatedArticles: () => {
    const { currentPage } = get();
    const filtered = get().getFilteredArticles();
    const start = (currentPage - 1) * 9;
    return filtered.slice(start, start + 9);
  },
  getTotalPages: () => {
    const filteredCount = get().getFilteredArticles().length;
    return Math.ceil(filteredCount / 9);
  },
  fetchArticleByTitle: async (category, slug) => {
    const { articles, fetchArticles } = get();

    let articlesCategory = articles[category];
    if (!articlesCategory) {
      await fetchArticles(category);
      articlesCategory = get().articles[category];
    }
    return (
      articlesCategory.find((article) => titleToSlug(article.title) === slug) ||
      null
    );
  },
}));
