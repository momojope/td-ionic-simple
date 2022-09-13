# install ionic 
npm install -g ionic/cli

#create a blank new project with angular
ionic start movieApp blank --type=angular
cd ./movieApp
#run server
ionic serve

# Use the CLI to generate same page et service
ionic g page pages/movies
ionic g page pages/movieDetails
ionic g service services/movie

