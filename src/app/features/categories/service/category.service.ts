import { Injectable } from '@angular/core';
import { SupabaseService } from '../../../core/services/supabase.service';
import { Category } from '../../../core/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly table: string = 'category';

  constructor(private readonly supabase: SupabaseService) {}

  async getCategories(): Promise<Category[]> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data || [];
  }

  async getCategoryById(id: string): Promise<Category | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async createCategory(category: Category): Promise<Category[] | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .insert([category]);

    if (error) {
      throw new Error(error.message);
    }

    return data ?? null;
  }

  async updateCategory(
    id: string,
    updates: Partial<Category>,
  ): Promise<Category[] | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .update(updates)
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    return data ?? null;
  }

  async deleteCategory(id: string): Promise<Category[] | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    return data ?? null;
  }
}
