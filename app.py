"""
Simple entry point script for the Resonatelifewater stub project.

Running this script prints a short status message so contributors
can verify that they cloned the repository and are executing code
from it locally.
"""

from datetime import UTC, datetime


def build_status_message(now: datetime | None = None) -> str:
    """Create a friendly status message with a timestamp.

    Args:
        now: Optional datetime used for generating the timestamp. Defaults to
            the current UTC time when omitted.
    """

    current_time = now if now is not None else datetime.now(tz=UTC)
    timestamp = current_time.isoformat(timespec="seconds")
    return (
        "Resonatelifewater stub is ready for development.\n"
        "Use this repository as a clean starting point for your features.\n"
        "Current UTC time: "
        f"{timestamp}"
    )


def main() -> None:
    """Print the status message."""
    print(build_status_message())


if __name__ == "__main__":
    main()
