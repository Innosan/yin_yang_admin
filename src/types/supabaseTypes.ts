export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cart_item: {
        Row: {
          id: number
          product_id: number | null
          quantity: number | null
          user_id: number | null
        }
        Insert: {
          id?: number
          product_id?: number | null
          quantity?: number | null
          user_id?: number | null
        }
        Update: {
          id?: number
          product_id?: number | null
          quantity?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_item_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_item_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      category: {
        Row: {
          id: number
          title: string | null
        }
        Insert: {
          id?: number
          title?: string | null
        }
        Update: {
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      delivery_address: {
        Row: {
          address: string | null
          id: number
          user_id: number | null
        }
        Insert: {
          address?: string | null
          id?: number
          user_id?: number | null
        }
        Update: {
          address?: string | null
          id?: number
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "delivery_address_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      favorite: {
        Row: {
          id: number
          product_id: number | null
          user_id: number | null
        }
        Insert: {
          id?: number
          product_id?: number | null
          user_id?: number | null
        }
        Update: {
          id?: number
          product_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "favorite_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorite_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      order: {
        Row: {
          created_at: string | null
          delivery_address: string | null
          delivery_note: string | null
          id: number
          status_id: number | null
          total_price: number | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          delivery_address?: string | null
          delivery_note?: string | null
          id?: number
          status_id?: number | null
          total_price?: number | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          delivery_address?: string | null
          delivery_note?: string | null
          id?: number
          status_id?: number | null
          total_price?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_status_id_fkey"
            columns: ["status_id"]
            referencedRelation: "status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      order_item: {
        Row: {
          id: number
          order_id: number | null
          product_id: number | null
          quantity: number | null
        }
        Insert: {
          id?: number
          order_id?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Update: {
          id?: number
          order_id?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_item_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_item_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["id"]
          }
        ]
      }
      product: {
        Row: {
          category_id: number | null
          count: number | null
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          price: number | null
          title: string | null
          weight: number | null
        }
        Insert: {
          category_id?: number | null
          count?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          price?: number | null
          title?: string | null
          weight?: number | null
        }
        Update: {
          category_id?: number | null
          count?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          price?: number | null
          title?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          }
        ]
      }
      status: {
        Row: {
          id: number
          title: string | null
        }
        Insert: {
          id?: number
          title?: string | null
        }
        Update: {
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      user: {
        Row: {
          first_name: string | null
          id: number
          last_name: string | null
          rating: number | null
          user_uuid: string | null
        }
        Insert: {
          first_name?: string | null
          id?: number
          last_name?: string | null
          rating?: number | null
          user_uuid?: string | null
        }
        Update: {
          first_name?: string | null
          id?: number
          last_name?: string | null
          rating?: number | null
          user_uuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_user_uuid_fkey"
            columns: ["user_uuid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
