package springtemplate.repositories;

import java.util.List;
import springtemplate.models.Hero;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface HeroRepository
    extends CrudRepository<Hero, Integer> {
  @Query(value = "SELECT * FROM heros",
      nativeQuery = true)
  public List<Hero> findAllHeros();
  @Query(value = "SELECT * FROM heros WHERE id=:heroId",
      nativeQuery = true)
  public Hero findHeroById(@Param("heroId") Integer id);
}
