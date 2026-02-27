import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

type EventType =
  | "registration"
  | "break"
  | "ceremony"
  | "setup"
  | "start"
  | "coding"
  | "networking"
  | "judging"
  | "submission"
  | "Banner"
  | "end"
  | "certificate";

interface ScheduleEvent {
  time: string;
  event: string;
  icon: string;
  type: EventType;
}

type DayKey = 1 | 2 | 3;

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<DayKey>(1);

  const scheduleData: Record<DayKey, ScheduleEvent[]> = {
    1: [
      { time: "11:00 AM", event: "Check In", icon: "🎫", type: "registration" },
      { time: "12:00 PM - 1:00 PM", event: "Lunch", icon: "🍽️", type: "break" },
      { time: "1:00 PM - 2:00 PM", event: "Banner Reveal", icon: "📢", type: "Banner" },
      { time: "2:00 PM - 4:00 PM", event: "Orientation & Opening Ceremony", icon: "🎤", type: "ceremony" },
      { time: "4:00 PM - 5:00 PM", event: "Lab Allotment", icon: "🏢", type: "setup" },
      { time: "5:00 PM - 8:00 PM", event: "Hackathon Begins", icon: "🚀", type: "start" },
      { time: "8:00 PM - 9:00 PM", event: "Dinner", icon: "🍴", type: "break" },
      { time: "9:00 PM Onwards", event: "Coding", icon: "💻", type: "coding" },
    ],
    2: [
      { time: "8:00 AM - 9:00 AM", event: "Breakfast", icon: "☕", type: "break" },
      { time: "9:00 AM - 1:00 PM", event: "Coding [ In between Judging Round 1 ]", icon: "💻", type: "coding" },
      { time: "1:00 PM - 2:00 PM", event: "Lunch", icon: "🍽️", type: "break" },
      { time: "2:00 PM - 6:00 PM", event: "Coding [ In between Judging Round 2 ]", icon: "💻", type: "coding" },
      { time: "6:00 PM - 8:00 PM", event: "Dinner", icon: "🍴", type: "break" },
      { time: "8:00 PM - 11:00 PM", event: "Networking & Jamming Session", icon: "🎶", type: "networking" },
      { time: "11:00 PM - 7:00 AM", event: "Coding", icon: "💻", type: "coding" },
    ],
    3: [
      { time: "7:00 AM - 8:00 AM", event: "Project & Code Submission", icon: "📤", type: "submission" },
      { time: "8:00 AM - 9:00 AM", event: "Breakfast", icon: "☕", type: "break" },
      { time: "9:00 AM - 11:00 PM", event: "Judging Round 3", icon: "⚖️", type: "judging" },
      { time: "11:30 PM - 1:00 PM", event: "Lunch", icon: "🍽️", type: "break" },
      { time: "1:00 PM - 3:00 PM", event: "Final Evaluation", icon: "🏆", type: "ceremony" },
      { time: "3:30 PM - 5:00 PM", event: "Closing Ceremony", icon: "🎉", type: "ceremony" },
      { time: "5:00 PM - 5:30 PM", event: "Certificate Distribution", icon: "📜", type: "certificate" },
      { time: "6:00 PM Onwards", event: "Check Out", icon: "👋", type: "end" },
    ],
  };

  const getEventColor = (type: EventType) => {
    const colors: Record<EventType, string> = {
      registration: "#e75829",
      break: "#FFD47C",
      ceremony: "#e75829",
      setup: "#F2A03D",
      start: "#e75829",
      coding: "#F2A03D",
      networking: "#FFD47C",
      judging: "#e75829",
      submission: "#e75829",
      end: "#FFD47C",
      Banner: "#F2A03D",
      certificate: "#e75829", // ✅ FIXED
    };

    return colors[type];
  };

  return (
    <section className="schedule-section">
      <div className="schedule-content">
        <SectionHeader
          badge="3-Day Event"
          title="Event"
          gradientText="Schedule"
          subtitle="A 36-hour journey of innovation, collaboration, and creation"
        />

        <div className="day-selector">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              className={`day-button ${activeDay === day ? "active" : ""}`}
              onClick={() => setActiveDay(day as DayKey)}
            >
              Day {day}
            </button>
          ))}
        </div>

        <div className="timeline">
          {scheduleData[activeDay].map((item, index) => (
            <div key={index} className="timeline-item">
              <div
                className="timeline-node"
                style={{ borderColor: getEventColor(item.type) }}
              >
                {item.icon}
              </div>

              <div className="timeline-card">
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-title">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;