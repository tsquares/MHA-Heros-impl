package springtemplate.daos;

import java.util.List;
import springtemplate.models.Quirk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import springtemplate.repositories.QuirkRepository;

@RestController
@CrossOrigin(origins = "*")
public class QuirkOrmDao {
  @Autowired
  QuirkRepository quirkRepository;
  
  @PostMapping("/api/quirks")
  public Quirk createQuirk(@RequestBody Quirk quirk) {
    return quirkRepository.save(quirk);
  }
  
  @GetMapping("/api/quirks")
  public List<Quirk> findAllQuirks() {
    return quirkRepository.findAllQuirks();
  }
  
  @GetMapping("/api/quirks/{quirkId}")
  public Quirk findQuirkById(
      @PathVariable("quirkId") Integer id) {
    return quirkRepository.findQuirkById(id);
  }
  
  @PutMapping("/api/quirks/{quirkId}")
  public Quirk updateQuirk(
      @PathVariable("quirkId") Integer id,
      @RequestBody Quirk quirkUpdates) {
    Quirk quirk = quirkRepository.findQuirkById(id);
    quirk.setName(quirkUpdates.getName());
    quirk.setType(quirkUpdates.getType());
    quirk.setDescription(quirkUpdates.getDescription());
    return quirkRepository.save(quirk);
  }
  
  @DeleteMapping("/api/quirks/{quirkId}")
  public void deleteQuirk(
      @PathVariable("quirkId") Integer id) {
    quirkRepository.deleteById(id);
  }
}
