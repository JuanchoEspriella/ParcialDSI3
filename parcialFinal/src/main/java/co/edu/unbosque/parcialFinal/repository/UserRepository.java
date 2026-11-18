package co.edu.unbosque.parcialFinal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.edu.unbosque.parcialFinal.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public Optional<User> findByUsername(String username);

	public void deleteByUsername(String username);
}
