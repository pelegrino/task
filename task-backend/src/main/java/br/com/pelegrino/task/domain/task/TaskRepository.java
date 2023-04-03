package br.com.pelegrino.task.domain.task;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends PagingAndSortingRepository<Task, Integer> {
	
	Task findByDescription(String description);
	

}
