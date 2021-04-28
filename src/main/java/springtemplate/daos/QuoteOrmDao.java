package springtemplate.daos;

import java.util.List;
import springtemplate.models.Quote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import springtemplate.repositories.QuoteRepository;

@RestController
@CrossOrigin(origins = "*")
public class QuoteOrmDao {
  @Autowired
  QuoteRepository quoteRepository;
  
  @PostMapping("/api/quotes")
  public Quote createQuote(@RequestBody Quote quote) {
    return quoteRepository.save(quote);
  }
  
  @GetMapping("/api/quotes")
  public List<Quote> findAllQuotes() {
    return (List<Quote>) quoteRepository.findAll();
  }
  
  @GetMapping("/api/quotes/{quoteId}")
  public Quote findQuoteById(
      @PathVariable("quoteId") Integer id) {
    return quoteRepository.findById(id).get();
  }
  
  @PutMapping("/api/quotes/{quoteId}")
  public Quote updateQuote(
      @PathVariable("quoteId") Integer id,
      @RequestBody Quote quoteUpdates) {
    Quote quote = this.findQuoteById(id);
    quote.setText(quoteUpdates.getText());
    quote.setFavorite(quoteUpdates.getFavorite());
    quote.setUpvotes(quoteUpdates.getUpvotes());
    quote.setHeroId(quoteUpdates.getHeroId());
    return quoteRepository.save(quote);
  }
  
  @DeleteMapping("/api/quotes/{quoteId}")
  public void deleteQuote(
      @PathVariable("quoteId") Integer id) {
    quoteRepository.deleteById(id);
  }
}
