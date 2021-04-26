package springtemplate.repositories;

import springtemplate.models.Quote;
import org.springframework.data.repository.CrudRepository;

public interface QuoteRepository
    extends CrudRepository<Quote, Integer> {
}
