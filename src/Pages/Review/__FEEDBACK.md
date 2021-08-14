1) It might be worth installing an automated code formatter if you don't have one? There are a few blank spaces and slightly off indenting kicking about that it would mop up. I use <a href="https://prettier.io/">Prettier</a>. Saves you faffing with tabs!
2) Looks like you have a class called `ticketcard.scss`, should we rename it to `TicketCard.scss` for consistency?
3) What do you think about moving the `Query.jsx` file to the same directory as the `Review.xx` files? We could rename it to `Review.query.jsx` as well to make it super clear that the query is for the Review component!
4) Do you think we should rename `TicketCardComponent` to match the name of the class file `TicketCard.jsx`? Just to avoid confusion!
5) What do you think about defining some constants for the actions types? It could make it harder to mistype the `type` field.

6) Looks like the line:
```    
const basket = omit(props, ['basket']);
```
on `Basket.jsx` isn't used. Do you reckon we could remove it?
7) I really like the way you used `map` to loop through items in the basket on `Basket.js`! I think we might be able to remove `if` statement as well if we try something like this: 
```
<h1>Your Basket</h1>
<p>You're currently looking at purchasing these tickets:</p>
{item && item.quantity &&
    <div>
    { props.basket.map((item, index) => {
        return (
            <BasketCard
                item={item}
                key={`basket-item-${index}`}
            />
        );
    }
    }) }
    </div>
}
```


