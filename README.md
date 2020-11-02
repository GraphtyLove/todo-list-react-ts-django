# Todo list

## What?
A simple todo list with those features:
    * [ ] Epic system
    * [X] Assignee system
    * [ ] Collaborative
    * [ ] Secure Login system
    * [X] Database connected
    * [ ] Drag & drop
    * [X] Tags system


## State
### Frontend
Almost all components are created, stylised and their props are typed.
There is hooks yet.

Next steps:
* [ ] Create needed hooks
    * [X] `useFetch`
* [ ] Create modals with react portals
* [ ] Check why `useFectch` is used 3 time at loading
* Fix useFetch tests

### Backend
The project only has been generated.

Next steps:
* [X] Create the rest API
* [ ] Replace author ID by author data in the API (serializers)
* [ ] Replace assignees ID by assignees data in the API (serializers)
* [ ] Replace namespace ID by namespace data in the API (serializers)
* [ ] Replace labels ID by labels data in the API (serializers)
* [ ] Add user's avatar to User model

## How?
With this stack:
    * React for the front
        * Hooks
        * Function based components
        * Typescript
    * Django with Django Rest Framework for the backend
    * MongoDB for the database
  
## Why?
Just to practice and learn a new stack.
Main learning focus for this project:
    * Typescript
    * React: portals
    * React: Custom hooks
    * React: `useCallback` hook
    * React: `useMemo` hook
    * React: `useContext` hook
    * Usage of mongo in Django
    
## Who?
Maxim Berge
