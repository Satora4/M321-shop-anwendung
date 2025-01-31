package ch.bbw.m321.produktkatalogservice.warenkorb;

public class CartItem {
    private String productId;
    private int quantity;

    // Getter und Setter

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getQuantity() {
        return quantity;
    }
}