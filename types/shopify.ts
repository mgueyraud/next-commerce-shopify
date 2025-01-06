export type Menu = {
    title: string,
    path: string
}

export type ShopifyMenuOperation = {
    data: {
        menu?: {
            items: {
                title: string;
                url: string;
            }[]
        }
    },
    variables: {
        handle: string;
    }
}

export type ShopifyProductsOperation = {
    data: {
        products: Connection<ShopifyProduct>
    },
    variables: {
        query?: string;
        reverse?: boolean;
        sortKey?: string;
    }
}

export type ShopifyProductOperation = {
    data: {
        product: ShopifyProduct
    },
    variables: {
        handle: string
    }
}

export type Money = {
    amount: string;
    currencyCode: string;
};

export type ProductOption = {
    id: string;
    name: string;
    values: string[];
};

export type Edge<T> = {
    node: T;
};  

export type Connection<T> = {
    edges: Array<Edge<T>>;
};

export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    price: Money;
  };
  
  export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
  
  export type SEO = {
    title: string;
    description: string;
  };

export type ShopifyProduct = {
    id: string;
    handle: string;
    availableForSale: boolean;
    title: string;
    description: string;
    descriptionHtml: string;
    options: ProductOption[];
    priceRange: {
      maxVariantPrice: Money;
      minVariantPrice: Money;
    };
    variants: Connection<ProductVariant>;
    featuredImage: Image;
    images: Connection<Image>;
    seo: SEO;
    tags: string[];
    updatedAt: string;
  };
  

export type Product = Omit<ShopifyProduct, 'variants' | 'images'> & {
    variants: ProductVariant[],
    images: Image[]
}

export type ShopifyCollection = {
    handle: string;
    title: string;
    description: string;
    seo: SEO;
    updatedAt: string;
};

export type CartProduct = {
    id: string;
    handle: string;
    title: string;
    featuredImage: Image;
};

export type ShopifyCart = {
    id: string | undefined;
    checkoutUrl: string;
    cost: {
        subtotalAmount: Money;
        totalAmount: Money;
        totalTaxAmount: Money;
    };
    lines: Connection<CartItem>;
    totalQuantity: number;
};

export type CartItem = {
    id: string | undefined;
    quantity: number;
    cost: {
      totalAmount: Money;
    };
    merchandise: {
      id: string;
      title: string;
      selectedOptions: {
        name: string;
        value: string;
      }[];
      product: CartProduct;
    };
  };
  
export type Cart = Omit<ShopifyCart, "lines"> & {
    lines: CartItem[];
};

export type ShopifyAddToCartOperation = {
    data: {
        cartLinesAdd: {
            cart: ShopifyCart;
        };
    };
    variables: {
        cartId: string;
        lines: {
            merchandiseId: string;
            quantity: number;
        }[];
    };
};
  
export type Collection = ShopifyCollection & {
    path: string;
};

export type ShopifyCollectionsOperation = {
    data: {
        collections: Connection<ShopifyCollection>;
    };
};

export type ShopifyCollectionProductsOperation = {
    data: {
        collection: {
            products: Connection<ShopifyProduct>;
        };
    };
    variables: {
        handle: string;
        reverse?: boolean;
        sortKey?: string;
    };
};

export type ShopifyProductRecommendationsOperation = {
    data: {
        productRecommendations: ShopifyProduct[];
    };
    variables: {
        productId: string;
    };
};

export type ShopifyCartOperation = {
    data: {
        cart: ShopifyCart;
    };
    variables: {
        cartId: string;
    };
};

export type ShopifyRemoveFromCartOperation = {
    data: {
      cartLinesRemove: {
        cart: ShopifyCart;
      };
    };
    variables: {
      cartId: string;
      lineIds: string[];
    };
};

export type ShopifyUpdateCartOperation = {
    data: {
        cartLinesUpdate: {
            cart: ShopifyCart;
        };
    };
    variables: {
        cartId: string;
        lines: {
            id: string;
            merchandiseId: string;
            quantity: number;
        }[];
    };
};

export type ShopifyCreateCartOperation = {
    data: { cartCreate: { cart: ShopifyCart } };
};    