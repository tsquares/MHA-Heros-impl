package springtemplate.daos;

import java.util.List;
import springtemplate.models.SuperMove;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import springtemplate.repositories.SuperMoveRepository;

@RestController
@CrossOrigin(origins = "*")
public class SuperMoveOrmDao {
  @Autowired
  SuperMoveRepository superMoveRepository;
  
  @PostMapping("/api/super_moves")
  public SuperMove createSuperMove(@RequestBody SuperMove superMove) {
    return superMoveRepository.save(superMove);
  }
  
  @GetMapping("/api/super_moves")
  public List<SuperMove> findAllSuperMoves() {
    return (List<SuperMove>) superMoveRepository.findAll();
  }
  
  @GetMapping("/api/super_moves/{superMoveId}")
  public SuperMove findSuperMoveById(
      @PathVariable("superMoveId") Integer id) {
    return superMoveRepository.findById(id).get();
  }
  
  @PutMapping("/api/super_moves/{superMoveId}")
  public SuperMove updateSuperMove(
      @PathVariable("superMoveId") Integer id,
      @RequestBody SuperMove superMoveUpdates) {
    SuperMove superMove = this.findSuperMoveById(id);
    superMove.setName(superMoveUpdates.getName());
    superMove.setDescription(superMoveUpdates.getDescription());
    superMove.setRange(superMoveUpdates.getRange());
    superMove.setUsage(superMoveUpdates.getUsage());
    superMove.setHeroId(superMoveUpdates.getHeroId());
    superMove.setQuirkId(superMoveUpdates.getQuirkId());
    return superMoveRepository.save(superMove);
  }
  
  @DeleteMapping("/api/super_moves/{superMoveId}")
  public void deleteSuperMove(
      @PathVariable("superMoveId") Integer id) {
    superMoveRepository.deleteById(id);
  }
}
