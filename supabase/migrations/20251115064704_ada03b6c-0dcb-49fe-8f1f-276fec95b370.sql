-- Create portfolio projects table
CREATE TABLE IF NOT EXISTS public.portfolio_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  year TEXT NOT NULL,
  image_url TEXT NOT NULL,
  client_name TEXT,
  services TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact form submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Portfolio projects policies (public read access)
CREATE POLICY "Anyone can view portfolio projects"
  ON public.portfolio_projects
  FOR SELECT
  USING (true);

-- Contact submissions policies (public insert only)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create function to update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for portfolio projects
CREATE TRIGGER update_portfolio_projects_updated_at
  BEFORE UPDATE ON public.portfolio_projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample portfolio projects
INSERT INTO public.portfolio_projects (title, slug, description, category, year, image_url, client_name, services, featured, order_index) VALUES
  ('Digital Transformation', 'digital-transformation', 'Reimagining digital experiences for modern brands', 'Branding', '2024', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800', 'TechCorp', ARRAY['Brand Strategy', 'UI/UX Design', 'Web Development'], true, 1),
  ('E-Commerce Revolution', 'ecommerce-revolution', 'Building seamless shopping experiences', 'Development', '2024', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', 'ShopFlow', ARRAY['Web Development', 'Mobile App', 'Analytics'], true, 2),
  ('Brand Identity', 'brand-identity', 'Crafting unique visual identities', 'Branding', '2023', 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800', 'StartupX', ARRAY['Brand Strategy', 'Logo Design', 'Guidelines'], false, 3),
  ('Mobile First', 'mobile-first', 'Native experiences for connected users', 'Development', '2023', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800', 'MobileFlow', ARRAY['Mobile App', 'UI/UX Design'], false, 4);