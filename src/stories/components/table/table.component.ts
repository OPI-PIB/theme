import { Component } from "@angular/core";

@Component({
  selector: "app-table",
  imports: [],
  template: `
    <table>
      <caption>
        Employee Directory
      </caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Jane Smith</td>
          <td>Marketing</td>
          <td>jane.smith&#64;example.com</td>
        </tr>
        <tr>
          <td>002</td>
          <td>John Doe</td>
          <td>Development</td>
          <td>john.doe&#64;example.com</td>
        </tr>
        <tr>
          <td>003</td>
          <td>Emily Johnson</td>
          <td>Design</td>
          <td>emily.j&#64;example.com</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: ``,
})
export class TableComponent {}
