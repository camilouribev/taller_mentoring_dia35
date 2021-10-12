package co.com.sofka.mentoring35;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface RandomNumberRepository extends ReactiveCrudRepository<RandomNumber, String> {
    
}
