import { Injectable } from '@angular/core';
import { SupabaseService } from '../../../core/services/supabase.service';
import { Product } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly table = 'product';

  constructor(private readonly supabase: SupabaseService) {}

  async getProducts(): Promise<Product[]> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .select('*');
    if (error) throw new Error(error.message);
    return data || [];
  }
}
