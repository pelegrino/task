package br.com.pelegrino.task.domain.task;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface TaskRepository extends PagingAndSortingRepository<Task, Integer> {
	
	Task findByDescription(String description);
	

}
