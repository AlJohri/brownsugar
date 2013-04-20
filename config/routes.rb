Brownsugar::Application.routes.draw do
  
  ComfortableMexicanSofa::Routing.admin(:path => '/cms-admin')
  
  # Make sure this routeset is defined last
  ComfortableMexicanSofa::Routing.content(:path => '/', :sitemap => false)

  root :to => "home#index"
end
