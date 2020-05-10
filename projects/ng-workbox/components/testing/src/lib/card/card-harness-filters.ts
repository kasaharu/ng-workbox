import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface CardHarnessFilters extends BaseHarnessFilters {
  title?: string | RegExp;
}
