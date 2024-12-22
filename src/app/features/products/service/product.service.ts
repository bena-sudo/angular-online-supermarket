import { Injectable } from '@angular/core';
import { SupabaseService } from '../../../core/services/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly table = 'product';

  constructor(private readonly supabase: SupabaseService) {}

  async getProducts(): Promise<any[]> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .select('*');
    if (error) throw new Error(error.message);
    return data || [];
  }

  async getProductById(id: string): Promise<any> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new Error(error.message);
    return data;
  }

  async createProduct(product: any): Promise<any> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .insert([product]);
    if (error) throw new Error(error.message);
    return data;
  }

  async updateProduct(id: string, updates: any): Promise<any> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .update(updates)
      .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }

  async deleteProduct(id: string): Promise<any> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .delete()
      .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }
}
