import { Component, OnInit } from '@angular/core';
import { SupervisorService } from '../../services/supervisor.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface SupervisorResponse {
  supervisor: any[]; // Array of workers
}

@Component({
  selector: 'app-listofsupervisor',
  templateUrl: './listofsupervisor.component.html',
  styleUrls: ['./listofsupervisor.component.css']
})
export class ListofsupervisorComponent implements OnInit {
  supervisors: any[] = [];
  updateForm: FormGroup;
  selectedSupervisor: any;
  isEnable: boolean = false;

  constructor(
    private supervisorService: SupervisorService,
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
    this.fetchSupervisors();
  }

  openConfirmationDialog(supervisorId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteSupervisor(supervisorId);
      }
    });
  }

  fetchSupervisors(): void {
    this.supervisorService.getSupervisor().subscribe(
      (response: any) => {
        this.supervisors = response.supervisors || [];
      },
      (error) => {
        console.error('Error fetching supervisors:', error);
      }
    );
  }

  private deleteSupervisor(supervisorId: number): void {
    this.supervisorService.deleteSupervisor(supervisorId).subscribe(
      () => {
        console.log('Supervisor deleted successfully');
        this.fetchSupervisors();
        Swal.fire({
          icon: 'success',
          title: 'Supervisor deleted successfully',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
      },
      (error) => {
        console.error('Error deleting supervisor:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error deleting supervisor',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
      }
    );
  }

  openUpdateForm(supervisor: any): void {
    this.selectedSupervisor = supervisor;
    this.updateForm.patchValue(supervisor);
    this.isEnable = true;
  }

  updateSupervisor(): void {
    if (this.updateForm.valid) {
      const updatedSupervisor = this.updateForm.value;
      const supervisorId = this.selectedSupervisor.id;
      this.supervisorService.updateSupervisor(supervisorId, updatedSupervisor).subscribe(
        () => {
          console.log('Supervisor updated successfully');
          this.fetchSupervisors();
          this.updateForm.reset();
          this.selectedSupervisor = null;
          this.isEnable = false;
          Swal.fire({
            icon: 'success',
            title: 'Supervisor updated successfully',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          });
        },
        (error) => {
          console.error('Error updating supervisor:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error updating supervisor',
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


