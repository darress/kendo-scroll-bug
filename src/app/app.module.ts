import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule, StockChartModule } from '@progress/kendo-angular-charts';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxModule, DropDownListModule, MultiSelectModule, DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DialogsModule, DialogModule, WindowModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
// import { MultiselectWithInheritanceComponent, InheritMultiSelectItemDirective } from './components/settings/multiselect-with-inheritance/multiselect-with-inheritance.component';

import { PopupModule } from '@progress/kendo-angular-popup';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { LabelModule } from '@progress/kendo-angular-label';
import { ContextMenuModule } from '@progress/kendo-angular-menu';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
//import { KalcKendoDialogDirective } from './directives/kendo-dialog.directive';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,

    ButtonsModule,
    TooltipModule,
    SortableModule,
    DropDownsModule,
    LayoutModule,
    GridModule,
    PopupModule,
    InputsModule,
    DialogsModule,
    DialogModule,
    ComboBoxModule,
    DropDownListModule,
    LabelModule,
    MultiSelectModule,
    DateInputsModule,
    ChartsModule,
    StockChartModule,
    UploadsModule,
    WindowModule,
    ChatModule,
    IndicatorsModule,
    TreeViewModule,
    ContextMenuModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
