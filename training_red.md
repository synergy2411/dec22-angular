Tea Break : 11:00 (15 Mins)
Lunch Break : 1:00 (45 Mins)
Tea Break : 3:30 (15 Mins)

# What is Angular ?

- to create mobile and web apps
- Framework for frontend apps
- creating SPA
- structured architecture
- 2 way data binding
- Components based
- MVC pattern
- Remote Server call / AJAX Calls
- Animation
- State Management

# Other Libraries and Frameworks

- jQuery : DOM manipulation, Ajax Calls, Animation
- React : Render the UI quickly and efficiently
- Vue : Template driven approach
- Knockout : MVVM architecture; 2 way data binding
- Backbone : MVC Pattern
- Stencil : Custom Components
- Polymer : Custom Elements
- D3 : for charting
- \*Ember : Heavy framework; Frequent change in internal API's
- AngularJS (2011): v1; Library
- Angular (2014): Latest Version; Framework

# JavaScript Types -

- Primitive Types : number, string, boolean
- Reference Types : object, array, date, function
- Other Types in TS -
  > any
  > enum
  > void
  > never
  > unknown
  > tuple
  > null
  > undefined
- Custom Type : "type"
- Link - typescriptlang.org

# Angular CLI Tools

- npm install @angular/cli@14 -g
- ng version
- ng new first-app
- cd first-app
- ng serve OR npm start

# Angular Building Blocks -

1. Component : ES6 Class + @Component()
2. Module : ES6 Class + @NgModule()
3. Directives : ES6 Class + @Directive()
4. Pipes : ES6 Class + @Pipe()
5. Services : ES6 Class + @Injectable() -> Platform Level | Module Level | Component / Directive Level

# to install bootstrap -

> npm i bootstrap@4

> ng g c components/users
> ng g

# Component Types

- Smart / Container / Parent : contains some business logic / model associated (UsersComponent)
- Dump / Presentational / Child : receives data from parent and display them on UI (UserInfo/UserImage)

## View Encapsulation

- Emulated (default)
  > Local CSS will take preference; Global CSS will apply when local CSS does not have rule
- Native (Dangerous)
  > Local CSS will affect the other part of your app
- ShadowDOM
  > Only Local CSS will apply, no global CSS rule will apply
