package springtemplate.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import springtemplate.models.SuperMove;
import org.springframework.data.repository.CrudRepository;

public interface SuperMoveRepository
    extends CrudRepository<SuperMove, Integer> {
  @Query(value = "SELECT * FROM super_moves WHERE hid=:heroId",
      nativeQuery = true)
  public SuperMove findSuperMoveByHeroId(@Param("heroId") Integer hid);
}
