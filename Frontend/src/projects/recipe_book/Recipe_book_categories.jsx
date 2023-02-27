import s from "./Recipe_book.module.css";

const Recipe_book_categories = (props) =>
{


    return (
        <div>
            {props.error && <p>{props.error}</p>}

            <div className={s.container}>
                {props.categories.length > 0 ? (
                    props.categories.map((category) =>
                    (
                        <div
                            className={s.category}
                            key={category.strCategory}
                            onClick={() =>
                            {
                                props.set_states("meals");
                                props.set_choosen_category(category.strCategory)
                            }}
                        >
                            <img src={props.category_imgs[category.strCategory]} alt={category.strCategory} />
                            <p className={s.category_title}>{category.strCategory}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading categories...</p>
                )}
            </div>
        </div >
    )
}

export default Recipe_book_categories;