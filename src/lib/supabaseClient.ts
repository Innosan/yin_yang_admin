import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/supabaseTypes.js'

export const supabase = createClient<Database>("https://yfwjdrfyiqluljyiocqd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmd2pkcmZ5aXFsdWxqeWlvY3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1MjU3NzUsImV4cCI6MjAwMDEwMTc3NX0.DAu-F5_-IhVAtf5LwNG2fWBrY5hT7yD4etRExeHfwyQ")
