import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService, NotificationService } from '../../../_core/_services';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.scss']
})
export class AdminCategoryFormComponent implements OnInit {
  public categoryForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    image: ['']
  });
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private notifyService: NotificationService
  ) {}
  get fc() {
    return this.categoryForm.controls;
  }
  ngOnInit() {}
  add() {
    const values = this.categoryForm.value;
    if (this.categoryForm.valid) {
      this.categoryService.add(values).subscribe(data => {
        if (data) {
          this.notifyService.pushSuccess('Ok', 'Kategoria została dodana');
          this.categoryForm.reset();
        } else {
          this.notifyService.pushError('Błąd', 'Kategoria istnieje');
        }
      });
    }
  }
}
