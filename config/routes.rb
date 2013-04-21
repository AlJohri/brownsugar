Brownsugar::Application.routes.draw do
	root :to => "home#index"
  
  ComfortableMexicanSofa::Routing.admin(:path => '/cms-admin')
  
  # Make sure this routeset is defined last
  ComfortableMexicanSofa::Routing.content(:path => '/', :sitemap => false)

  
end
