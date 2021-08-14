1) It might be worth installing an automated code formatter if you don't have one? There are a few blank spaces and slightly off indenting kicking about that it would mop up. I use <a href="https://prettier.io/">Prettier</a>. Saves you faffing with tabs!
2) What do you think about moving the `Query.jsx` file to the same directory as the `Review.xx` files? We could rename it to `Review.query.jsx` as well to make it super clear that the query is for the Review component!
3) I love the use of `.propTypes` on your components to type the props.
4) Do you think we should rename `TicketCardComponent` to match the name of the class file `TicketCard.jsx`? Just to avoid confusion!
5) What do you think about defining some constants for the actions types? It could make it harder to mistype the `type` field.
6) Looks like the line:
```    
const basket = omit(props, ['basket']);
```
on `Basket.jsx` isn't used. Do you reckon we could remove it?
7) I really like the way you used `map` to loop through items in the basket on `Basket.js`! I think we might be able to remove `if` statement as well if we try something like this: 
```
<div>
  {props.basket
    .filter((item) => item.quantity)
    .map((item, index) => {
      return <BasketCard item={item} key={`basket-item-${index}`} />;
    })}
</div>
```
This also means that each `BasketCard` has a sequential `basket-item-*index*`.
Maybe add a quick test to check that an `item` with no quantity does not produce a `<BasketCard>`
8) `Basket.scss` has a classname of `.basket` but I can't see it used anywhere! Do we maybe want to add it to one of the `<div>`s?
9) What do you think about renaming `BasketComponent` to `Basket` so it matches the name of the class file 👌. Might be a few more places we could do this if you think it is worth it. 
10) In `BasketCardComponent`, I think we should pop the `onClick` on the button component instead of the div otherwise we can click the whole `div` to remove the item! Could also add a sneaky test to test invoking the `onClick` calls dispatch with the action?
11) We could simplify this method a lil:
```
getCardCost (price, quantity) {
    let cost = price;
    cost = price * quantity;
    return cost;
}

getCardCost (price, quantity) => price * quantity
```
12) We might want to reset the `active` state after the button has been clicked, otherwise it won't reset the change in background colour!
13) Looks like you have a class called `ticketcard.scss`, should we rename it to `TicketCard.scss` for consistency?

The page works really nicely 😄 If you need a hand with anything I am more than happy to help over slack or a video call!  



