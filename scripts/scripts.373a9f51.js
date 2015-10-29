"use strict";angular.module("portfolioAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","slick","duScroll"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("portfolioAppApp").controller("MainCtrl",["$scope","wpjsonFactory","$http","$rootScope",function(a,b,c,d){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],c.get("http://finley-day.com/wp-json/media?parent?type=project").success(function(b){a.projects=b}),a.fromFactory=b.sayHello("World"),d.activeNav="home",c.get("http://finley-day.com/wp-json/pages/welcome").success(function(b){a.welcome=b}),c.get("http://finley-day.com/wp-json/pages/Key Skills").success(function(b){a.skills=b}),c.get("http://finley-day.com/wp-json/pages/Contact Intro").success(function(b){a.contact=b}),a.close=function(){a.shown=!1},a.breakpoints=[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:1}}]}]),angular.module("portfolioAppApp").controller("AboutCtrl",["$scope","$http","$rootScope",function(a,b,c){b.get("http://finley-day.com/wp-json/pages/about").success(function(b){a.about=b})}]),angular.module("portfolioAppApp").factory("wpjsonFactory",["$http",function(a){return{sayHello:function(a){return'Factory says "Hello '+a+'"'}}}]),angular.module("portfolioAppApp").controller("ContactCtrl",["$scope","$rootScope","$http",function(a,b,c){b.activeNav="contact",c.get("http://portfolio-remote.dev/wp-json/pages/contact").success(function(b){a.contact=b})}]),angular.module("portfolioAppApp").run(["$templateCache",function(a){a.put("views/about.html",'<div ng-bind-html="about.content"></div>'),a.put("views/contact.html",'<p>This is the contact view.</p> <div ng-bind-html="contact.content"> </div>'),a.put("views/main.html",'<section id="intro" class="intro" style="padding-top: 40px"> <div class="container"> <div class="row"> <div class="col-sm-4"> <h3>{{welcome.title}}</h3> <div ng-bind-html="welcome.content"></div><a du-smooth-scroll href="#about">Read more about us</a>. </div> <div class="col-sm-4 skills clearfix"> <h3>{{skills.title}}</h3> <div ng-bind-html="skills.content"></div> </div> <div class="col-sm-4 contact"> <h3>{{contact.title}}</h3> <div ng-bind-html="contact.content"></div> </div> </div> </div> </section> <!-- <p>{{fromFactory}}</p> --> <section id="project" class="project"> <div class="container"> <slick class="slider-nav" init-onload="true" dots="true" infinite="true" speed="300" arrows="true" slides-to-show="5" touch-move="true" slides-to-scroll="1" init-onload="true" data="projects" adaptive-height="true" as-nav-for=".slick-for" focus-on-select="true" responsive="breakpoints" center-mode="true" center-padding="40px"> <div ng-repeat="project in projects | orderBy:\'parent.date\':true" class="carousel-item"> <!--<img data-lazy="{{project.source}}">--> <img src="{{project.source}}"> <div class="slide__caption">{{project.parent.title}}</div> </div> </slick> <slick class="slick-for" init-onload="true" infinite="true" speed="300" arrows="false" slides-to-show="1" touch-move="true" slides-to-scroll="1" init-onload="true" data="projects" adaptive-height="true" as-nav-for=".slider-nav"> <div ng-repeat="project in projects | orderBy:\'parent.date\':true" class="carousel-item"> <h3>{{project.parent.title}}</h3> <div ng-bind-html="project.parent.content"></div> </div> </slick> </div> </section> <section class="about" id="about" ng-controller="AboutCtrl"> <div class="container"> <div class="row"> <div class="col-sm-12" ng-bind-html="about.content"></div> </div> </div> </section>')}]);