import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


interface WorkerResponse {
  workers: any[]; // Array of workers
}

@Component({
  selector: 'app-list-of-workers',
  templateUrl: './list-of-workers.component.html',
  styleUrls: ['./list-of-workers.component.css']
})


export class ListOfWorkersComponent implements OnInit{

  workers: any[] = [];
  updateForm: FormGroup;
  selectedWorker: any;
  isEnable: boolean = false;

  constructor(
    private workerService: WorkerService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.updateForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchWorkers();
  }

  openConfirmationDialog(workerId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteWorker(workerId);
      }
    });
  }

  fetchWorkers(): void {
    this.workerService.getWorkers().subscribe(
      (response: any) => {
        this.workers = response.workers || [];
      },
      (error) => {
        console.error('Error fetching workers:', error);
      }
    );
  }

  private deleteWorker(workerId: number): void {
    this.workerService.deleteWorker(workerId).subscribe(
      () => {
        console.log('Worker deleted successfully');
        this.fetchWorkers();
        Swal.fire({
          icon: 'success',
          title: 'Worker deleted successfully',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
      },
      (error) => {
        console.error('Error deleting worker:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error deleting worker',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
      }
    );
  }

  openUpdateForm(worker: any): void {
    this.selectedWorker = worker;
    this.updateForm.patchValue(worker);
    this.isEnable = true;
  }

  updateWorker(): void {
    if (this.updateForm.valid) {
      const updatedWorker = this.updateForm.value;
      const workerId = this.selectedWorker.id;
      this.workerService.updateWorker(workerId, updatedWorker).subscribe(
        () => {
          console.log('Worker updated successfully');
          this.fetchWorkers();
          this.updateForm.reset();
          this.selectedWorker = null; // Clear the selected worker after update
          this.isEnable = false; // Close the update form
          Swal.fire({
            icon: 'success',
            title: 'Worker updated successfully',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          });
        },
        (error) => {
          console.error('Error updating worker:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error updating worker',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          });
        }
      );
    }
  }
}
