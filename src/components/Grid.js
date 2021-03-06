import React from 'react';
import { Link } from 'react-router-dom';
import TodoCard from './utils/TodoCard';


const Grid = (props) => {
  const { posts } = props;
  let view = <p />;
  if (posts.length >= 1) {
    view = Object.keys(posts).map(post => <TodoCard key={post} details={posts[post]} />);
  } else if (posts.length < 1) {
    view = (
      <div>
        <p className="text-danger">
          You currently have no Todo
        </p>
        <Link to="/create" className="btn btn-sm btn-warning">
          Create Todo
        </Link>
      </div>
    );
  }
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="headTitle">
            Todo List
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-2 col-sm-1" />
        <div className="col-lg-6 col-md-8 col-sm-10">
          <br />
          {view}
        </div>
        <div className="col-lg-3 col-md-2 col-sm-1" />
      </div>
    </div>
  );
};
export default Grid;
