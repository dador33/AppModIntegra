import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MATERIAL_MODULES } from '../../../material/material-exports';
import { IntegracionTabla } from '../../interfaces/tabla.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-integracion-details-dialog',
  standalone: true,
  imports: [MATERIAL_MODULES, CommonModule],
  templateUrl: './integracion-details-dialog.component.html',
  styleUrls: ['./integracion-details-dialog.component.css']
})
export class IntegracionDetailsDialogComponent implements OnInit {
  public parsedRequestData: any;
  public parsedResponseData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IntegracionTabla) {}

  ngOnInit() {
    this.parsedRequestData = this.parseAndCleanJson(this.data.REQUEST_DATA);
    this.parsedResponseData = this.parseAndCleanJson(this.data.RESPONSE_DATA);
  }

  private parseAndCleanJson(jsonString: string | null): any {
    if (!jsonString) {
      return {};
    }

    try {
      // Replace escaped characters with the correct ones
      const cleanedJsonString = jsonString
        .replace(/\\r\\n/g, '') // Remove all \r\n (newline) characters
        .replace(/\\t/g, '') // Remove all \t (tab) characters
        .replace(/\\"/g, '"'); // Replace escaped quotes with actual quotes

      // Parse the cleaned JSON string
      return JSON.parse(cleanedJsonString);
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      return {};
    }
  }
}
