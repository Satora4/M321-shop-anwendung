package ch.bbw.m321.bewertungservice.bewertung;

import ch.bbw.m321.bewertungservice.bewertung.Review;
import ch.bbw.m321.bewertungservice.bewertung.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @PostMapping
    public Review addReview(@RequestBody Review review) {
        return reviewRepository.save(review);
    }

    @GetMapping("/product/{productId}")
    public List<Review> getReviewsByProductId(@PathVariable Long productId) {
        return reviewRepository.findByProductId(productId);
    }
}