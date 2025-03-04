import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

// Pass the list of categories to this component from `App`. Then, update this
// component to display `<button>` elements for each category (again, make sure to
// use a key prop).

// _When a button is clicked_, the following should happen:

// - Whichever button was clicked should have a class of `selected`. The other
//   buttons should not have any class assigned.
// - The list of tasks being displayed should be filtered, so that only tasks that
//   match the category that was clicked are displayed.
// - If the button for "All" is selected, all the tasks should be displayed.