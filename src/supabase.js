import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ahtnxguebjyvrzcgqany.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodG54Z3VlYmp5dnJ6Y2dxYW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MjM4MDEsImV4cCI6MjAyOTE5OTgwMX0.LWMA4r9wPmpyX0SvRZ4xb1jce53tC1lhky1GYTcZ8P4"
);


          
          // .ilike('city_name', '%Bangalore%') // Change the query as needed

  // .eq(column, value): Equal to
  // .neq(column, value): Not equal to
  // .gt(column, value): Greater than
  // .gte(column, value): Greater than or equal to
  // .lt(column, value): Less than
  // .lte(column, value): Less than or equal to
  // .like(column, pattern): LIKE SQL operator
  // .ilike(column, pattern): Case-insensitive LIKE SQL operator
  // .is(column, value): IS operator
  // .in(column, array): IN operator
  // .cs(column, array): Contains
  // .cd(column, array): Contained by
  // .ov(column, array): Overlap
  // .fts(column, query): Full-text search