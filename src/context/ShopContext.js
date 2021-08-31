import React, { Component } from "react";
import camelcaseKeys from "camelcase-keys";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_KEY,
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    collections: [],
    isCartOpen: false,
    isMenuOpen: false,
    isInfoModalActive: false,
    infoOperaTitle: "",
  };

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((error) => console.log(error));
  };

  addItemToCheckout = async (
    variantId,
    quantity,
    options = { noOpen: false }
  ) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout });

    if (!options.noOpen) this.openCart();
  };

  buyNowClick = async (variantId) => {
    await this.addItemToCheckout(variantId, 1, { noOpen: true });
    window.location.assign(this.state.checkout.webUrl);
  };

  removeLineItem = async (lineItemIdsToRemove) => {
    const checkoutId = this.state.checkout.id;

    client.checkout
      .removeLineItems(checkoutId, lineItemIdsToRemove)
      .then((checkout) => this.setState({ checkout }));
  };

  fetchAllProducts = async () => {
    const promises = [client.product.fetchAll(), this.fetchCollections()];
    const data = await Promise.all(promises);

    const [products, collections] = data;

    this.setState({ products: products, collections: collections });
  };

  fetchCollections = async () => {
    const collections = await client.collection.fetchAllWithProducts();

    const parsedCollections = {};
    collections.forEach((collection) => {
      if (collection.products.length === 0) return;
      parsedCollections[collection.handle] = collection.products;
    });

    return camelcaseKeys(parsedCollections);
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
    return product;
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };
  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  handleShowInfo = (title) => {
    this.setState({
      ...this.state,
      isInfoModalActive: true,
      infoOperaTitle: title,
    });
  };

  closeInfoModal = () => {
    this.setState({
      ...this.state,
      isInfoModalActive: false,
      infoOperaTitle: "",
    });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          buyNowClick: this.buyNowClick,
          handleShowInfo: this.handleShowInfo,
          closeInfoModal: this.closeInfoModal,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
