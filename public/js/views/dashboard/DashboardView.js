/* global define */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/dashboard/dashboardTemplate.html',
  'views/dashboard/DashboardItemView',
  'collections/courses/CourseCollection',
  'models/course/Course'
], function($, _, Backbone, DashboardTemplate, DashboardItemView, CourseCollection, Course){

  //Handlebars
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
  var DashboardView = Backbone.View.extend({
    el: $("#page"),
    modelView: DashboardItemView,
    collection: new CourseCollection(),

    events: {
    },
    
    initialize: function() {
    },

    render: function(){

      console.log("Render - Dashboard")

      var body = this.$el.html(DashboardTemplate);

      var Courses = new CourseCollection();
      Courses.fetch({
        success: function(err,data) {

        _.each(data, function(data) {
          var aCourse = new Course();
          aCourse.set(data);
          Courses.add(aCourse);
          var item = new DashboardItemView({model:data});
          body.find("#course_list").append(item.render().el);
        });


        $(document).ready(function(){
          $.each($(".course_name"), function(){
            var text = $(this).text();
            if (text.length > 30){
              $(this).text(text.substring(0, 30) + "..."); 
            }
          });
        });

      }});

    }

  });

  //DashboardView.render();
  return DashboardView;

});
