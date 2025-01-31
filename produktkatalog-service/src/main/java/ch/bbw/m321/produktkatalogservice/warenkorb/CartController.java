package ch.bbw.m321.produktkatalogservice.warenkorb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private RedisTemplate<String, CartItem> redisTemplate;

    private static final String CART_KEY = "cart";

    @PostMapping
    public CartItem addToCart(@RequestBody CartItem cartItem) {
        redisTemplate.opsForList().rightPush(CART_KEY, cartItem);
        return cartItem;
    }

    @DeleteMapping("/{productId}")
    public void removeFromCart(@PathVariable String productId) {
        List<CartItem> cartItems = redisTemplate.opsForList().range(CART_KEY, 0, -1);
        for (CartItem item : cartItems) {
            if (item.getProductId().equals(productId)) {
                redisTemplate.opsForList().remove(CART_KEY, 1, item);
                break;
            }
        }
    }

    @GetMapping
    public List<CartItem> getCart() {
        return redisTemplate.opsForList().range(CART_KEY, 0, -1);
    }
}