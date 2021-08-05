import React, { useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

import MuiDrawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";

import { ShopContext } from "../context/ShopContext";

import { parsePrice } from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  closeIcon: {
    width: "20rem",
    height: "20rem",
  },
}));

const Drawer = withStyles({
  root: {
    border: "1px solid red",
    padding: "10rem",
  },
  paper: {
    width: "55rem",
  },
})(MuiDrawer);

export default function TemporaryDrawer() {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);
  const classes = useStyles();

  return (
    <div>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={closeCart}
        className={classes.drawer}
      >
        <Box display="flex" justifyContent="flex-end" pr={5} pt={5}>
          <IconButton aria-label="close" onClick={closeCart}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box px={7}>
          <Box>
            <Typography variant="h3" gutterBottom>
              Carrello
            </Typography>
          </Box>
          <div className="shopping-cart__items">
            {checkout.lineItems &&
              checkout.lineItems.map((item) => {
                return (
                  <div className="shopping-cart__line-item" key={uuidv4()}>
                    <Box>
                      <img
                        className="shopping-cart__image"
                        src={item.variant.image.src}
                        alt={item.title}
                      />
                    </Box>
                    <div className="shopping-cart__item-content">
                      <h4 className="shopping-cart__item-title">
                        {item.title}
                      </h4>
                    </div>
                    <div className="shopping-cart__right-part">
                      <div className="shopping-cart__delete-item">
                        <IconButton onClick={() => removeLineItem(item.id)}>
                          <DeleteIcon fontSize="large" />
                        </IconButton>
                      </div>
                      <p className="shopping-cart__price">
                        {parsePrice(item.variant.price)}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <Box display="flex" justifyContent="flex-start" mt={5}>
            <a
              href={checkout.webUrl}
              className="btn slide__btn text-white text-uppercase"
            >
              Checkout
            </a>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
