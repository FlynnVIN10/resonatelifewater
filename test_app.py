from datetime import datetime, timezone

from app import build_status_message


def test_build_status_message_with_provided_time():
    fixed_time = datetime(2024, 1, 1, 12, 0, 0, tzinfo=timezone.utc)

    message = build_status_message(fixed_time)

    expected_timestamp = fixed_time.isoformat(timespec="seconds")
    assert "Resonatelifewater stub is ready for development." in message
    assert "Use this repository as a clean starting point for your features." in message
    assert f"Current UTC time: {expected_timestamp}" in message


def test_build_status_message_format_parses_iso_datetime():
    message = build_status_message()

    timestamp = message.split("Current UTC time: ")[-1]
    parsed = datetime.fromisoformat(timestamp)

    assert parsed.tzinfo == timezone.utc
