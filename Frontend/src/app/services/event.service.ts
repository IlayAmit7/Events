import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { appConfig } from 'src/AppConfig/appConfig-false';

import { EventModel } from '../models/event-model.model';
import { EventTypeModel } from '../models/eventType-model.model';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    constructor(private http: HttpClient) { }

    async getAllEventsTypes(): Promise<EventTypeModel[]> {
        const observable = this.http.get<EventTypeModel[]>(appConfig.eventsTypesUrl);
        return await firstValueFrom(observable);
    }

    async getAllEventsByType(eventTypeId: string): Promise<EventModel[]> {
        const observable = this.http.get<EventModel[]>(appConfig.eventsByTypeUrl + eventTypeId);
        return await firstValueFrom(observable);
    }

    async addEvent(event: EventModel): Promise<EventModel> {
        const observable = this.http.post<EventModel>(appConfig.eventsUrl, event);
        return await firstValueFrom(observable);
    }

    async deleteEvent(_id: string): Promise<void> {
        const observable = this.http.delete<EventModel>(appConfig.eventsUrl + _id);
        await firstValueFrom(observable);
    }

}
