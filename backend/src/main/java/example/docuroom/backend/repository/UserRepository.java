package example.docuroom.backend.repository;

import example.docuroom.backend.entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserAuth, Long> {
    Optional<UserAuth> findByUsername(String username);

    Boolean existsByUsername(String username);
}
