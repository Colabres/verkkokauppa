-- Create products table + seed data
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  description TEXT NOT NULL
);

INSERT INTO products (name, price, description) VALUES
('Keyboard', 29.90, 'Wired USB keyboard'),
('Mouse', 19.90, 'Optical mouse'),
('Monitor', 149.00, '24-inch IPS display')
ON CONFLICT DO NOTHING;
