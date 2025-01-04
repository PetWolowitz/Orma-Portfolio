/*
  # Orders Schema Update

  1. Tables
    - orders: Stores order information
    - order_items: Stores individual items within orders
  
  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to view and insert their own orders
    
  3. Changes
    - Drop existing policies if they exist to avoid conflicts
    - Recreate policies with proper permissions
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own orders" ON orders;
DROP POLICY IF EXISTS "Users can insert their own orders" ON orders;
DROP POLICY IF EXISTS "Users can view their own order items" ON order_items;

-- Create policies
CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    order_id IN (
      SELECT id FROM orders WHERE user_id = auth.uid()
    )
  );