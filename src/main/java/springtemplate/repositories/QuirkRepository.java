package springtemplate.repositories;

import java.util.List;
import springtemplate.models.Quirk;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface QuirkRepository
    extends CrudRepository<Quirk, Integer> {
  @Query("SELECT quirk FROM Quirk quirk")
  public List<Quirk> findAllQuirks();
  @Query("SELECT quirk FROM Quirk quirk WHERE quirk.id=:id")
  public Quirk findQuirkById(@Param("id") Integer id);
}
