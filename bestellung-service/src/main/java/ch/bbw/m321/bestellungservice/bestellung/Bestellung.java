package ch.bbw.m321.bestellungservice.bestellung;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Bestellung {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long customerId;
    private Date orderDate;
    private String orderStatus;

    @ElementCollection
    private List<String> orderItems;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public List<String> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<String> orderItems) {
        this.orderItems = orderItems;
    }
}