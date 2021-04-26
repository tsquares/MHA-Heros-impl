package springtemplate.daos;

import java.util.List;
import springtemplate.models.Hero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import springtemplate.repositories.HeroRepository;

@RestController
@CrossOrigin(origins = "*")
public class HeroOrmDao {
  /*
  create<MODEL>(<MODEL>)       - inserts an instance of <MODEL> as a new record/document
                                 into the appropriate table/collection
  findAll<MODEL>()             - retrieves all the records/documents from the appropriate
                                 table/collection as an array/list/collection of instances
                                 of <MODEL>
  find<MODEL>ById(<ID>)        - retrieves a record/document whose primary key is equal to <ID>
                                 from the appropriate table/collection as an instance of <MODEL>
  update<MODEL>(<ID>, <MODEL>) - updates a record/document whose primary key is equal to <ID>
                                 in the appropriate table/collection with the values in the
                                 instance of <MODEL>
  delete<MODEL>(<ID>)          - removes a record/document whose primary key is equal to <ID>
   */
  
  @Autowired
  HeroRepository heroRepository;
  
  @PostMapping("/api/heros")
  public Hero createHero(@RequestBody Hero hero) {
    return heroRepository.save(hero);
  }
  
  @GetMapping("/api/heros")
  public List<Hero> findAllHeros() {
    return heroRepository.findAllHeros();
  }
  
  @GetMapping("/api/heros/{heroId}")
  public Hero findHeroById(
      @PathVariable("heroId") Integer id) {
    return heroRepository.findHeroById(id);
  }
  
  @PutMapping("/api/heros/{heroId}")
  public Hero updateHero(
      @PathVariable("heroId") Integer id,
      @RequestBody Hero heroUpdates) {
    Hero hero = heroRepository.findHeroById(id);
    hero.setFirstName(heroUpdates.getFirstName());
    hero.setLastName(heroUpdates.getLastName());
    hero.setUsername(heroUpdates.getUsername());
    hero.setPassword(heroUpdates.getPassword());
    hero.setEmail(heroUpdates.getEmail());
    hero.setDateOfBirth(heroUpdates.getDateOfBirth());
    hero.setBloodType(heroUpdates.getBloodType());
    hero.setAffiliation(heroUpdates.getAffiliation());
    return heroRepository.save(hero);
  }
  
  @DeleteMapping("/api/heros/{heroId}")
  public void deleteHero(
      @PathVariable("heroId") Integer id) {
    heroRepository.deleteById(id);
  }
}
